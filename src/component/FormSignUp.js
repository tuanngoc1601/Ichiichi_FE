import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../fire_base';

const FormSignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        image: ''
    });
    const [errors, setErrors] = useState({});

    const handleOnChange = (e, type) => {
        let copyState = { ...userInfo };
        if (type === "image") copyState[type] = e.target.files[0];
        else copyState[type] = e.target.value;
        setUserInfo(copyState);

        if (!!errors[type]) setErrors({ ...errors, [type]: null });
    }

    const validateFormSignUp = () => {
        const { email, name, username, password, confirmPassword, image } = userInfo;
        const newError = {};
        // email error
        if (!email || email === '') newError.email = "空白にすることはできません!";
        else {
            let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            if (!regex.test(email)) newError.email = "有効な電子メールアドレス！";
        }
        // name error
        if (!name || name === '') newError.name = "空白にすることはできません!";
        // username error
        if (!username || username === '') newError.username = "空白にすることはできません!";
        // password error
        if (!password || password === '') newError.password = "空白にすることはできません";
        else if (password.length < 6) newError.password = "パスワードは少なくとも6文字でなければなりません";
        // confirm password error
        if (!confirmPassword || confirmPassword === '') newError.confirmPassword = "空白にすることはできません";
        else if (confirmPassword !== password) newError.confirmPassword = "パスワードが間違っていることを確認してください";
        // image error
        if (!image || image === '') newError.image = "空白にすることはできません";
        else if (image.size > 1024 * 1024 * 2) newError.image = "ファイルは 2MB 未満である必要があります";
        else {
            let allowedImageTypes = ["image/jpeg", "image/jpg", "image/gif", "image/png"];
            if (!allowedImageTypes.includes(image.type)) newError.image = "無効なファイルタイプ";
        }
        return newError;
    }

    const registerWithEmailAndPassword = async (userInfo) => {
        try {
            await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    // Xảy ra lỗi trong quá trình tạo người dùng hoặc cập nhật thông tin
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("Error:", errorCode, errorMessage);
                });
            // const userRegister = res.user;
            // console.log(userRegister);
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateFormSignUp();
        if (Object.keys(newErrors).length > 0) setErrors(newErrors);
        else {
            registerWithEmailAndPassword(userInfo);
        }
    }

    return (
        <div className="w-50 mt-5 mx-auto">
            <h3 className="mt-3">登録</h3>
            <form className="mt-4">
                <div className="row my-4">
                    <Form.Group className="row d-flex align-items-center">
                        <Form.Label htmlFor="email" className="w-25 m-0 text-end">メール</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            className="w-75"
                            value={userInfo.email}
                            onChange={(e) => handleOnChange(e, "email")}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback className="text-end p-0" type='invalid'>
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className="row my-4">
                    <Form.Group className="row d-flex align-items-center">
                        <Form.Label htmlFor="name" className="w-25 m-0 text-end">名前</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            className="w-75"
                            value={userInfo.name}
                            onChange={(e) => handleOnChange(e, "name")}
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback className="text-end p-0" type='invalid'>
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className="row my-4">
                    <Form.Group className="row d-flex align-items-center">
                        <Form.Label htmlFor="username" className="w-25 m-0 text-end">ユーザー名</Form.Label>
                        <Form.Control
                            type="text"
                            id="username"
                            className="w-75"
                            value={userInfo.username}
                            onChange={(e) => handleOnChange(e, "username")}
                            isInvalid={!!errors.username}
                        />
                        <Form.Control.Feedback className="text-end p-0" type='invalid'>
                            {errors.username}
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className="row my-4">
                    <Form.Group className="row d-flex align-items-center">
                        <Form.Label htmlFor="password" className="w-25 m-0 text-end">パスワード</Form.Label>
                        <Form.Control
                            type="password"
                            id="password"
                            className="w-75"
                            value={userInfo.password}
                            onChange={(e) => handleOnChange(e, "password")}
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback className="text-end p-0" type='invalid'>
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className="row my-4">
                    <Form.Group className="row d-flex align-items-center">
                        <Form.Label htmlFor="confirmPassword" className="w-25 m-0 text-end">パスワードを認証する</Form.Label>
                        <Form.Control
                            type="password"
                            id="confirmPassword"
                            className="w-75"
                            value={userInfo.confirmPassword}
                            onChange={(e) => handleOnChange(e, "confirmPassword")}
                            isInvalid={!!errors.confirmPassword}
                        />
                        <Form.Control.Feedback className="text-end p-0" type='invalid'>
                            {errors.confirmPassword}
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className="row my-4">
                    <Form.Group className="row d-flex align-items-center">
                        <Form.Label className="w-25 m-0 text-end">イメージ</Form.Label>
                        <div className="w-75 d-flex align-items-center px-0">
                            <Form.Label htmlFor="image" type="button" className="py-2 rounded m-0 w-25 bg-secondary">
                                <i className="fas fa-upload text-white"></i>
                            </Form.Label>
                            <Form.Control
                                type="file"
                                id="image"
                                hidden
                                onChange={(e) => handleOnChange(e, "image")}
                                isInvalid={!!errors.image}
                            />
                            <Form.Control.Feedback className="text-end p-0" type='invalid'>
                                {errors.image}
                            </Form.Control.Feedback>
                        </div>
                    </Form.Group>
                </div>
                <div className="row d-flex justify-content-end me-1 my-3">
                    <button
                        type="submit"
                        className="btn btn-primary col-2"
                        onClick={(e) => handleSubmit(e)}
                    >
                        登録
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormSignUp