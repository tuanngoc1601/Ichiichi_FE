import React from 'react';
import { Link } from "react-router-dom";

const FormLogin = () => {
    return (
        <div className="w-50 mt-5 mx-auto">
            <h3 className="mt-5">ログイン</h3>
            <form className="mt-4">
                <div className="row my-5">
                    <div className="form-group d-flex align-items-center">
                        <label htmlFor="username" className="form-label m-0" style={{ width: "20%" }}>ユーザー名</label>
                        <input type="text" className="form-control" id="username" />
                    </div>
                </div>

                <div className="row my-5">
                    <div className="form-group d-flex align-items-center">
                        <label htmlFor="password" className="form-label m-0" style={{ width: "20%" }}>パスワード</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                </div>
                <div className="row">
                    <p className="text-end">パスワードを忘れた?&nbsp;<Link to="/reset-password">リセット</Link>&nbsp;&nbsp;&nbsp;まだアカウントがありません?<Link to="/sign-up">登録</Link></p>
                </div>
                <div className="row d-flex justify-content-end me-1 my-3">
                    <button type="submit" className="btn btn-primary col-2">ログイン</button>
                </div>
            </form>
        </div>
    )
}

export default FormLogin