import React, { useState, useCallback, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { LoginRouter } from "../../api/LoginApi";

export const 
    isAuthenticated = () => {
        const data = { userName: this.userName, password: this.password };
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };

        fetch('https://afya-challenge.herokuapp.com/auth/login', requestInfo)
        .then(response => {
            if(response.ok) {
                return response.json()
            }
            throw new Error("Login inválido...");
        })
        .then(token => {
            localStorage.setItem('token', token);
            this.props.history.push("/");
            return;
        })
        .catch(e => {
            toast.error('OOOps, algo deu errado');
            console.log("Algo deu errado");
        }); 
    }
