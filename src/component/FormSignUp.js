import React from 'react'

const FormSignUp = () => {
    return (
        <div className="w-50 mt-5 mx-auto">
            <h3 className="mt-5">登録</h3>
            <form className="mt-4">
                <div className="row my-5">
                    <div className="form-group d-flex align-items-center">
                        <label for="name" className="form-label m-0 text-end me-3" style={{ width: "35%" }}>名前</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="form-group d-flex align-items-center">
                        <label for="username" className="form-label m-0 text-end me-3" style={{ width: "35%" }}>ユーザー名</label>
                        <input type="text" className="form-control" id="username" />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="form-group d-flex align-items-center">
                        <label for="password" className="form-label m-0 text-end me-3" style={{ width: "35%" }}>パスワードを認証する</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="form-group d-flex align-items-center">
                        <label className="form-label m-0 text-end me-3" style={{ width: "35%" }}>イメージ</label>
                        <div className="w-100 d-flex">
                            <label htmlFor="image" className="py-2 rounded" role="button" style={{ width: "15%", backgroundColor: "#ddd" }}><i className="fas fa-upload"></i></label>
                            <input type="file" className="form-control" id="image" hidden />
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-end me-1 my-3">
                    <button type="submit" className="btn btn-primary col-2">登録</button>
                </div>
            </form>
        </div>
    )
}

export default FormSignUp