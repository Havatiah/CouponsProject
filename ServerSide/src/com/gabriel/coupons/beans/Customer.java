package com.gabriel.coupons.beans;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Customer {
	private long id;
	private String name;
	private String password;

	public Customer() {
	}

	public Customer(String name, String password) {
		this.name = name;
		this.password = password;
	}

	public Customer(long id, String name, String password) {
		this.id = id;
		this.name = name;
		this.password = password;
	}

	@Override
	public String toString() {
		return "\nCustomer [id=" + id + ", name=" + name + ", password=" + password + "]";
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
