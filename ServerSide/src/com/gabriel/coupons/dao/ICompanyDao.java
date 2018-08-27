package com.gabriel.coupons.dao;

import java.util.Collection;
import java.util.Date;

import com.gabriel.coupons.beans.Company;
import com.gabriel.coupons.beans.Coupon;
import com.gabriel.coupons.enums.CouponType;
import com.gabriel.coupons.exceptions.CouponSystemException;

public interface ICompanyDao {
	void createCompany(Company company) throws CouponSystemException;

	Company readCompany(long companyId) throws CouponSystemException;

	Collection<Company> readAllCompanies() throws CouponSystemException;

	Collection<Coupon> readCoupons(long companyId) throws CouponSystemException;

	Collection<Coupon> readCouponsByType(long companyId, CouponType type) throws CouponSystemException;

	Collection<Coupon> readCouponsByPrice(long companyId, double price) throws CouponSystemException;

	Collection<Coupon> readCouponsByDate(long companyId, Date date) throws CouponSystemException;

	void updateCompany(Company company) throws CouponSystemException;

	void deleteCompany(long companyId) throws CouponSystemException;

	void deleteCompanyCouponsAndPurchasedCoupons(long companyId) throws CouponSystemException;

	boolean doesCompanyNameExist(String companyName) throws CouponSystemException;

	long getIdByLogin(String companyName, String password) throws CouponSystemException;

	boolean login(String companyName, String password) throws CouponSystemException;

}
