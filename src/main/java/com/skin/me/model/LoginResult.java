package com.skin.me.model;

import com.minitwit.model.User;

public class LoginResult {

	private String error;
	
	private User user;
	
	public String getError() {
		return error;
	}
	public void setError(String error) {
		this.error = error;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
}
