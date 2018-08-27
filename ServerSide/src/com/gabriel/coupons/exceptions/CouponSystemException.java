package com.gabriel.coupons.exceptions;

import com.gabriel.coupons.enums.ErrorType;

public class CouponSystemException extends Exception {

	private static final long serialVersionUID = 1L;
	private ErrorType errorType;

	public CouponSystemException(String message) {
		super(message);
	}

	public CouponSystemException(ErrorType errorType, String message) {
		super(message);
		this.errorType = errorType;
	}

	public CouponSystemException(String message, Exception e) {
		super(message, e);
	}

	public CouponSystemException(ErrorType errorType, String message, Exception e) {
		super(message, e);
		this.errorType = errorType;
	}

	public ErrorType getErrorType() {
		return errorType;
	}

}
