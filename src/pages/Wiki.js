import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import axios from "axios";
import { Viewer } from "@toast-ui/react-editor";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import "@toast-ui/editor/dist/toastui-editor.css";

const Wiki = (props) => {
  const [wiki, setWiki] = useState({
    // name: "",
    // brief: "",
    // def: "",
    likerList: [],
  });

  const [liked, setLiked] = useState(false);
  const [viewerRef] = useState(useRef(null));

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/wiki/${props.match.params.id}`)
      .then((res) => {
        setWiki(res.data);
        if (res.data.likerList.filter((c) => c.id === props.info.id).length) {
          setLiked(true);
        }
        viewerRef.current.getInstance().setMarkdown(res.data.def);
      })
      .catch((err) => console.log(err));
  }, [liked, props]);

  const like = () => {
    axios
      .put(`http://localhost:8080/api/like/${props.match.params.id}`, {
        ...props.info,
      })
      .then((res) => {
        console.log(res);
        setLiked(true);
      })
      .catch((err) => console.log(err));
  };

  const unLike = () => {
    axios
      .put(`http://localhost:8080/api/unlike/${props.match.params.id}`, {
        ...props.info,
      })
      .then((res) => {
        console.log(res);
        setLiked(false);
      })
      .catch((err) => console.log(err));
  };

  const onLike = () => {
    // 계정정보
    if (!props.info.id) {
      return alert("로그인 후에 시도하세용!");
    }
    if (liked) {
        unLike();
    } else {
        like();
    }
  };

  return (
    <div>
      <h1>{wiki.name}</h1>
      <div className="">
        <button onClick={onLike}>
          {liked ? <AiFillHeart /> : <AiOutlineHeart />}
          <span>{wiki.likerList.length}</span>
        </button>
        <button>
          <Link to={``} style={{ color: "#000000" }}>
            역링크
          </Link>
        </button>
        <button>
          <Link to={`/update/${wiki._id}`} style={{ color: "#000000" }}>
            편집
          </Link>
        </button>
        <button>
          <Link to={`/history/${wiki._id}`} style={{ color: "#000000" }}>
            역사
          </Link>
        </button>
      </div>
      <span>최근 수정 시간:</span>
      <h2>한줄 요약: {wiki.brief}</h2>
      <Viewer
        initialValue=""
        previewStyle="vertical"
        ref={viewerRef}
        plugins={[tableMergedCell]}
      />
    </div>
  );
};

export default Wiki;
