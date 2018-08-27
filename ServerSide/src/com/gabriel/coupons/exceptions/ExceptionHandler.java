package com.gabriel.coupons.exceptions;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import com.gabriel.coupons.beans.ErrorBean;

@Provider
public class ExceptionHandler implements ExceptionMapper<Throwable> {

	@Override
	public Response toResponse(Throwable exception) {
		if (exception instanceof CouponSystemException) {
			CouponSystemException couponSystemException = (CouponSystemException) exception;
			int internalErrorCode = couponSystemException.getErrorType().getInternalErrorCode();
			String externalMessage = couponSystemException.getErrorType().getExternalMessage();
			String internalMessage = couponSystemException.getMessage();
			ErrorBean errorBean = new ErrorBean(internalErrorCode, internalMessage, externalMessage);
			Response response = Response.status(internalErrorCode).entity(errorBean).build();
			return response;
		} else if (exception instanceof Exception) {
			String internalMessage = exception.getMessage();
			ErrorBean errorBean = new ErrorBean(607, internalMessage, "System error. Please try  again later");
			return Response.status(607).entity(errorBean).build();
		}
		return Response.status(500).entity(null).build();
	}

}
