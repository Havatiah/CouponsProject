package com.gabriel.coupons.enums;

public enum ErrorType {
	NAME_ALREADY_EXISTS(600,"This name already exists. Please chose another name"),
	NAME_IS_IRREPLACEABLE(601, "You cannot change the name"),
	NOT_AVAILABLE(602, "Not available"),
	LOGIN_FAILED (603, "Login failed.Please try again"),
	FIELD_IS_IRREPLACEABLE (604, "You cannot change this field"),
	COUPON_ALREADY_PURCHASED(605, "You cannnot purchase the same coupon twice"),
	OUT_OF_STOCK(606, "Product is out of stock"),
	GENERAL_ERROR (607, "System error. Please try again later");
	
	private int internalErrorCode;
	private String externalMessage;
	private ErrorType(int internalErrorCode, String externalMessage) {
		this.internalErrorCode = internalErrorCode;
		this.externalMessage = externalMessage;
	}
	public int getInternalErrorCode() {
		return internalErrorCode;
	}
	public String getExternalMessage() {
		return externalMessage;
	}
	
	
}
