import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import React from "react";
import { Link } from "react-router-dom";

const SongForm = () => {
  return (
    <div className=''>
      <div style={{ textAlign: "center" }}>
        <div className={styles.container}>
          <form className={styles.form}>
            <h1>Upload Your Assignment </h1>
            <input
              type='text'
              class='form-control'
              id='floatingInput'
              placeholder='Assignments type'
              name='name'
            />
            <br></br>
            <input
              type='text'
              class='form-control'
              id='floatingInput'
              placeholder='AssignmentType'
              name='AssignmentType'
            />
            <br></br>
            <input name='img' label='Choose Image' type='image' />
            <br></br>
            <input name='Assignment' label='Choose File' type='file' />
            <br></br>
            <button type='submit' className='btn btn-danger'>
              Submit
            </button>
          </form>

          <Link to='/okok'>
            <button type='submit' className='btn btn-danger'>
              All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SongForm;
