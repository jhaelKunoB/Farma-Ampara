import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FarzaaContext } from "../../context/FarzaaContext";

const HeaderCategoryArea = ({ header, title }) => {
  const { isCategoryOpen, handleCategoryBtn, categoryBtnRef } =
    useContext(FarzaaContext);
  return (
    <div className={`fz-category-area ${header}`} ref={categoryBtnRef}>
      <button className="fz-category-btn" onClick={handleCategoryBtn}>
        <i className="fa-solid fa-grid"></i>
        <span className={title}>Category</span>
      </button>

      <div className={`fz-category-menu ${isCategoryOpen ? "open" : ""}`}>
        <div className="row gx-3 gx-md-5 gy-5">
          <div className="col-md-4 col-6">
            <ul className="fz-category-list">
              <li>
                <Link to="/shop">Analgésicos (15)</Link>
              </li>
              <li>
                <Link to="/shop">Antibióticos (22)</Link>
              </li>
              <li>
                <Link to="/shop">Antiinflamatorios (18)</Link>
              </li>
              <li>
                <Link to="/shop">Antihistamínicos (30)</Link>
              </li>
              <li>
                <Link to="/shop">Medicamentos para la presión (12)</Link>
              </li>
              <li>
                <Link to="/shop">Vitaminas y Suplementos (25)</Link>
              </li>
              <li>
                <Link to="/shop">Medicamentos para el estómago (20)</Link>
              </li>
              <li>
                <Link to="/shop">Medicamentos para el resfriado (14)</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-6">
            <ul className="fz-category-list">
              <li>
                <Link to="/shop">Analgésicos (15)</Link>
              </li>
              <li>
                <Link to="/shop">Antibióticos (22)</Link>
              </li>
              <li>
                <Link to="/shop">Antiinflamatorios (18)</Link>
              </li>
              <li>
                <Link to="/shop">Antihistamínicos (30)</Link>
              </li>
              <li>
                <Link to="/shop">Medicamentos para la presión (12)</Link>
              </li>
              <li>
                <Link to="/shop">Vitaminas y Suplementos (25)</Link>
              </li>
              <li>
                <Link to="/shop">Medicamentos para el estómago (20)</Link>
              </li>
              <li>
                <Link to="/shop">Medicamentos para el resfriado (14)</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-6">
            <ul className="fz-category-list">
              <li>
                <Link to="/shop">Analgésicos (15)</Link>
              </li>
              <li>
                <Link to="/shop">Antibióticos (22)</Link>
              </li>
              <li>
                <Link to="/shop">Antiinflamatorios (18)</Link>
              </li>
              <li>
                <Link to="/shop">Antihistamínicos (30)</Link>
              </li>
              <li>
                <Link to="/shop">Medicamentos para la presión (12)</Link>
              </li>
              <li>
                <Link to="/shop">Vitaminas y Suplementos (25)</Link>
              </li>
              <li>
                <Link to="/shop">Medicamentos para el estómago (20)</Link>
              </li>
              <li>
                <Link to="/shop">Medicamentos para el resfriado (14)</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCategoryArea;
