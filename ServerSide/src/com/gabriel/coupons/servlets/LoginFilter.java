package com.gabriel.coupons.servlets;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.ws.rs.HttpMethod;

public class LoginFilter implements Filter {

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		// enhance possibilities of the parameters
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;
		// Check if session exists. If true, then it returns the reference of the
		// session object. If not, this method will return null
		HttpSession session = req.getSession(false);
		String pageRequestedURL = req.getRequestURL().toString();
		resp.addHeader("Access-Control-Allow-Origin", "http://localhost:4200");
		resp.addHeader("Access-Control-Allow-Headers", "Origin, Content-Type,Accept,Authorization");
		resp.addHeader("Access-Control-Allow-Credentials", "true");
		resp.addHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
		if (session != null || pageRequestedURL.contains("/login") || req.getMethod().equals(HttpMethod.OPTIONS)) {
			chain.doFilter(request, response);
		} else {
			// If session is null, we set the status of the request to unauthorized
			resp.setStatus(401);
		}

	}

	public void init(FilterConfig fConfig) throws ServletException {
	}

	public void destroy() {
	}

}
