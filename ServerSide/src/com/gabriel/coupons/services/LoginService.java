package com.gabriel.coupons.services;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;

import com.gabriel.coupons.CouponSystem;
import com.gabriel.coupons.beans.LoginRequest;
import com.gabriel.coupons.enums.ClientType;
import com.gabriel.coupons.exceptions.CouponSystemException;
import com.gabriel.coupons.facades.IClientFacade;

@Path("/login")
public class LoginService {

	@Context
	HttpServletRequest httpRequest;

	@POST
	@Path("/authenticate")
	public Response authenticate(LoginRequest loginRequest) {

		try {
			IClientFacade facade = checkCredenatials(loginRequest);
			HttpSession session = httpRequest.getSession(true);
			session.setAttribute("facade", facade);
			return Response.ok().build();

		} catch (CouponSystemException e) {
			e.printStackTrace();
			return Response.status(401).build();
		}

	}

	public IClientFacade checkCredenatials(LoginRequest loginRequest) throws CouponSystemException {

		CouponSystem couponSystem = CouponSystem.getInstance();

		switch (loginRequest.getUserType()) {
		case "Admin":
			return couponSystem.login(loginRequest.getUsername(), loginRequest.getPassword(), ClientType.ADMIN);
		case "Company":
			return couponSystem.login(loginRequest.getUsername(), loginRequest.getPassword(), ClientType.COMPANY);
		case "Customer":
			return couponSystem.login(loginRequest.getUsername(), loginRequest.getPassword(), ClientType.CUSTOMER);
		default:
			throw new CouponSystemException("Login Falied");
		}
	}

}
