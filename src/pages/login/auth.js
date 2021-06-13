import React, { useState, useCallback, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { LoginRouter } from "../../api/LoginApi";

export const isAuthenticated = () => {
  const history = useHistory();
  const [isLogin, setLoginData] = useState(false);

  const loginSubmit = useCallback(function handleSubmit(e) {
    e.preventDefault();
    console.log("Você clicou em enviar.");
    setLoginData(true)
        LoginRouter.post('login')
        .then(
            response => {
                localStorage.setItem('token', response.data.token)
                toast.success('Login realizado!', {
                    onClose: () => history.push('/')
                })
            }
        ).catch( err => toast.error('OOOps, algo deu errado')).finally( () => setLoginData(false))
  },[history]);
};
