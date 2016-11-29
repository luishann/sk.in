package com.skinme.dao;

import com.skin.me.model.Entry;
import com.skin.me.model.User;

public interface UserDao {

	User getUserbyUsername(String username);
	
	void insertEntry(User user, Entry entry);
	
	void deleteEntry(User user, Entry entry);
	
	Entry lastEntry(User user);
	
	void registerUser(User user);
}
