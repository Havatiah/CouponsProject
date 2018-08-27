package com.gabriel.coupons;

import com.gabriel.coupons.enums.ClientType;
import com.gabriel.coupons.exceptions.CouponSystemException;
import com.gabriel.coupons.facades.CustomerFacade;

public class Tester {

	public static void main(String[] args) throws CouponSystemException {

		// AdminFacade adminFacade = (AdminFacade)
		// CouponSystem.getInstance().login("admin", "1234", ClientType.ADMIN);
		// Company company = new Company(306, "Coca colaf", "456dffg",
		// "cola@gmail.com");
		// Customer customer = new Customer(203, "Gabrielff", "pasds3");
		// adminFacade.createCompany(company);
		// adminFacade.deleteCompany(305);
		// adminFacade.updateCompany(company);
		// System.out.println(adminFacade.readAllCompanies());
		// System.out.println(adminFacade.readCompany(104));
		// adminFacade.createCustomer(customer);
		// adminFacade.deleteCustomer(203);
		// adminFacade.updateCustomer(customer);
		// System.out.println(adminFacade.readAllCustomers());
		// System.out.println(adminFacade.readCustomer(203));
		//
		// CompanyFacade companyFacade = (CompanyFacade)
		// CouponSystem.getInstance().login("Adidas", "Adidas1234",
		// ClientType.COMPANY);
		// Coupon coupon = new Coupon("pidaagggg", java.sql.Date.valueOf("2018-05-23"),
		// java.sql.Date.valueOf("2018-07-29"), 6, CouponType.TRAVELLING, "blablabla",
		// 89, "ewe");
		// companyFacade.createCoupon(coupon);
		// companyFacade.deleteCoupon(213);
		// companyFacade.updateCoupon(coupon);
		// System.out.println(companyFacade.readCompany());
		// System.out.println(companyFacade.readCoupons());
		// System.out.println(companyFacade.readCouponsByType(CouponType.TRAVELLING));
		// System.out.println(companyFacade.readCouponsByPrice(79));
		// System.out.println(companyFacade.readCouponsByDate(java.sql.Date.valueOf("2018-08-30")));
		//
		CustomerFacade customerFacade = (CustomerFacade) CouponSystem.getInstance().login("Monica", "mon124546",
				ClientType.CUSTOMER);
		customerFacade.purchaseCoupon(411);
		// System.out.println(customerFacade.readCustomerCoupons());
		// System.out.println(customerFacade.readCustomerCouponsByType(CouponType.TRAVELLING));
		// System.out.println(customerFacade.readCustomerCouponsByPrice(89));
		//
		// CouponSystem.getInstance().shutdown();
	}

}
