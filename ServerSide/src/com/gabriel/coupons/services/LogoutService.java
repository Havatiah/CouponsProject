package com.gabriel.coupons.services;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;

@Path("/logout")
public class LogoutService {

	@Context
	HttpServletRequest httpRequest;

	@POST
	public void logout() {
		HttpSession session = httpRequest.getSession(false);
		session.invalidate();
	}

}
