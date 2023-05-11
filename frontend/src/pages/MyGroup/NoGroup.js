import Layout from "../../components/reuseUI/Layout";
import "./NoGroup.css"
import logo from '../../images/NoGroup.png'

const Nogroup = () => {
  return (
    <div className="outer">
        <Layout />
        <div className="main">
            <p className="font">가입된 그룹이 없습니다.</p>
            <img src={logo} alt="그룹" className="group-image" />
        </div>
        <div className="sub">
            <button className="search_btn">+그룹 탐색하기</button>
            <button className="search_btn">+그룹 생성하기</button>
        </div>
    </div>
  );
}

export default Nogroup;
