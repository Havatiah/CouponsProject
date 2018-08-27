package com.gabriel.coupons.services;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import com.gabriel.coupons.CouponSystem;
import com.gabriel.coupons.beans.Coupon;
import com.gabriel.coupons.dao.CouponDao;
import com.gabriel.coupons.dao.ICouponDao;
import com.gabriel.coupons.enums.ClientType;
import com.gabriel.coupons.enums.CouponType;
import com.gabriel.coupons.enums.ErrorType;
import com.gabriel.coupons.exceptions.CouponSystemException;
import com.gabriel.coupons.facades.CustomerFacade;

@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Path("/customer")
public class CustomerService {

	private ICouponDao couponDao = new CouponDao();

	@Context
	HttpServletRequest request;

	private CustomerFacade getFacadeFromSession() {

		return (CustomerFacade) request.getSession().getAttribute("facade");

	}

	// checked
	@POST
	@Path("/purchaseCoupon/{id}")
	public void purchaseCoupon(@PathParam("id") long couponId) throws CouponSystemException {
		getFacadeFromSession().purchaseCoupon(couponId);
	}

	// checked
	@GET
	@Path("/getCustomerCoupons")
	public Collection<Coupon> readCustomerCoupons() throws CouponSystemException {
		return getFacadeFromSession().readCustomerCoupons();

	}

	// checked
	@GET
	@Path("/getCustomerCouponsByType")
	public Collection<Coupon> readCustomerCouponsByType(@QueryParam("type") CouponType type)
			throws CouponSystemException {
		return getFacadeFromSession().readCustomerCouponsByType(type);
	}

	// checked
	@GET
	@Path("/getCustomerCouponsByPrice")
	public Collection<Coupon> readCustomerCouponsByPrice(@QueryParam("price") double price)
			throws CouponSystemException {
		return getFacadeFromSession().readCustomerCouponsByPrice(price);
	}

	@GET
	@Path("/getAllCoupons")
	public Collection<Coupon> readAllCoupons() throws CouponSystemException {
		return couponDao.readAllCoupons();
	}

	@POST
	@Path("/login")
	public void login(@QueryParam("username") String username, @QueryParam("password") String password,
			@Context HttpServletRequest request) throws CouponSystemException {
		CustomerFacade facade = (CustomerFacade) CouponSystem.getInstance().login(username, password,
				ClientType.CUSTOMER);
		if (facade != null) {
			HttpSession session = request.getSession();
			session.setAttribute("customerFacade", facade);
		} else {
			throw new CouponSystemException(ErrorType.LOGIN_FAILED, "Login failed, please try again");
		}
	}
}
