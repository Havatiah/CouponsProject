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
import com.gabriel.coupons.beans.Customer;
import com.gabriel.coupons.enums.ClientType;
import com.gabriel.coupons.enums.ErrorType;
import com.gabriel.coupons.exceptions.CouponSystemException;
import com.gabriel.coupons.facades.AdminFacade;

@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Path("/admin")
public class AdminService {

	private AdminFacade adminFacade = new AdminFacade();

	// checked
	@POST
	@Path("/customer")
	public void createCustomer(Customer customer) throws CouponSystemException {
		adminFacade.createCustomer(customer);
	}

	// checked
	@POST
	@Path("/company")
	public void createCompany(Company company) throws CouponSystemException {
		adminFacade.createCompany(company);
	}

	// checked
	@PUT
	@Path("/customer")
	public void updateCustomer(Customer customer) throws CouponSystemException {
		adminFacade.updateCustomer(customer);
	}

	// checked
	@PUT
	@Path("/company")
	public void updateCompany(Company company) throws CouponSystemException {

		adminFacade.updateCompany(company);

	}

	// checked
	@GET
	@Path("/allCompanies")
	public Collection<Company> readAllCompanies() throws CouponSystemException {
		return adminFacade.readAllCompanies();
	}

	// checked
	@GET
	@Path("/getCompany/{id}")
	public Company readCompany(@PathParam("id") long companyId) throws CouponSystemException {
		return adminFacade.readCompany(companyId);
	}

	// checked
	@GET
	@Path("/allCustomers")
	public Collection<Customer> readAllCustomers() throws CouponSystemException {
		return adminFacade.readAllCustomers();
	}

	// checked
	@GET
	@Path("/getCustomer/{id}")
	public Customer readCustomer(@PathParam("id") long customerId) throws CouponSystemException {
		return adminFacade.readCustomer(customerId);
	}

	// checked
	@DELETE
	@Path("/company/{id}")
	public void deleteCompany(@PathParam("id") long companyId) throws CouponSystemException {
		adminFacade.deleteCompany(companyId);
	}

	// checked
	@DELETE
	@Path("/customer/{id}")
	public void deleteCustomer(@PathParam("id") long customerId) throws CouponSystemException {

		adminFacade.deleteCustomer(customerId);
	}

	@POST
	@Path("/login")
	public void login(@QueryParam("username") String username, @QueryParam("password") String password,
			@Context HttpServletRequest request) throws CouponSystemException {
		AdminFacade facade = (AdminFacade) CouponSystem.getInstance().login(username, password, ClientType.ADMIN);
		if (facade != null) {
			HttpSession session = request.getSession();
			session.setAttribute("adminFacade", facade);
		} else {
			throw new CouponSystemException(ErrorType.LOGIN_FAILED, "Login failed, please try again");
		}
	}
}
