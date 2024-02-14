import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [title, setTitle] = useState(state?.title || "");
  const [value, setValue] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        "http://localhost:8800/api/upload",
        formData
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(
            `http://localhost:8800/api/posts/${state.id}`,
            {
              title,
              desc: value,
              cat,
              img: file ? imgUrl : "",
            },
            { withCredentials: true }
          )
        : await axios.post(
            "http://localhost:8800/api/posts/",
            {
              title,
              desc: value,
              cat,
              img: file ? imgUrl : "",
              date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            },
            { withCredentials: true }
          );
      navigate("/");
    } catch (err) {
      console.log(`cv chiar la utlima paranteza de la handle click`);
      console.log(err);
    }
  };
  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="romania"
              id="romania"
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "romania"}
            />
            <label htmlFor="romania">Romania</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="anglia"
              id="anglia"
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "anglia"}
            />
            <label htmlFor="anglia">Anglia</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="spania"
              id="spania"
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "spania"}
            />
            <label htmlFor="spania">Spania</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="italia"
              id="italia"
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "italia"}
            />
            <label htmlFor="italia">Italia</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="germania"
              id="germania"
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "germania"}
            />
            <label htmlFor="germania">Germania</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="franta"
              id="franta"
              onChange={(e) => setCat(e.target.value)}
              checked={cat === "franta"}
            />
            <label htmlFor="franta">Franta</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
