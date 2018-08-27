package com.gabriel.coupons.services;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import com.gabriel.coupons.CouponSystem;
import com.gabriel.coupons.beans.Company;
import com.gabriel.coupons.beans.Coupon;
import com.gabriel.coupons.enums.ClientType;
import com.gabriel.coupons.enums.CouponType;
import com.gabriel.coupons.enums.ErrorType;
import com.gabriel.coupons.exceptions.CouponSystemException;
import com.gabriel.coupons.facades.CompanyFacade;

@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Path("/company")
public class CompanyService {

	@Context
	HttpServletRequest request;

	private CompanyFacade getFacadeFromSession() {

		return (CompanyFacade) request.getSession().getAttribute("facade");
	}

	// checked
	@POST
	@Path("/createCoupon")
	public void createCoupon(Coupon coupon) throws CouponSystemException {
		getFacadeFromSession().createCoupon(coupon);
	}

	// checked
	@GET
	@Path("/getCompany")
	public Company readCompany() throws CouponSystemException {
		return getFacadeFromSession().readCompany();
	}

	// checked
	@GET
	@Path("/getCoupons")
	public Collection<Coupon> readCoupons() throws CouponSystemException {
		System.out.println(getFacadeFromSession().readCoupons());
		return getFacadeFromSession().readCoupons();

	}

	// checked
	@GET
	@Path("/getCouponsByType")
	public Collection<Coupon> readCouponsByType(@QueryParam("type") CouponType type) throws CouponSystemException {
		return getFacadeFromSession().readCouponsByType(type);
	}

	// checked
	@GET
	@Path("/getCouponsByPrice")
	public Collection<Coupon> readCouponsByPrice(@QueryParam("price") double price) throws CouponSystemException {
		return getFacadeFromSession().readCouponsByPrice(price);
	}

	@GET
	@Path("/getCouponsByDate")
	public Collection<Coupon> readCouponsByDate(@QueryParam("date") String date) throws CouponSystemException {
		return getFacadeFromSession().readCouponsByDate(date);
	}

	// checked
	@PUT
	@Path("/coupon")
	public void updateCoupon(Coupon coupon) throws CouponSystemException {
		getFacadeFromSession().updateCoupon(coupon);
	}

	// checked
	@DELETE
	@Path("/coupon/{id}")
	public void deleteCoupon(@PathParam("id") long couponId) throws CouponSystemException {
		getFacadeFromSession().deleteCoupon(couponId);
	}

	@POST
	@Path("/login")
	public void login(@QueryParam("username") String username, @QueryParam("password") String password,
			@Context HttpServletRequest request) throws CouponSystemException {
		CompanyFacade facade = (CompanyFacade) CouponSystem.getInstance().login(username, password, ClientType.COMPANY);
		if (facade != null) {
			HttpSession session = request.getSession();
			session.setAttribute("companyFacade", facade);
		} else {
			throw new CouponSystemException(ErrorType.LOGIN_FAILED, "Login failed, please try again");
		}
	}

}
