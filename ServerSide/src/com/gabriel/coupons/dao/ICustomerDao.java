package com.gabriel.coupons.dao;

import java.util.Collection;

import com.gabriel.coupons.beans.Coupon;
import com.gabriel.coupons.beans.Customer;
import com.gabriel.coupons.enums.CouponType;
import com.gabriel.coupons.exceptions.CouponSystemException;

public interface ICustomerDao {
	void createCustomer(Customer customer) throws CouponSystemException;

	Customer readCustomer(long customerId) throws CouponSystemException;

	Collection<Coupon> readCustomerCoupons(long customerId) throws CouponSystemException;

	Collection<Customer> readAllCustomers() throws CouponSystemException;

	void updateCustomer(Customer customer) throws CouponSystemException;

	void deleteCustomer(long customerId) throws CouponSystemException;

	boolean login(String customerName, String password) throws CouponSystemException;

	void purchaseCoupon(long couponId, long customerId) throws CouponSystemException;

	boolean doesCustomerNameExist(String customerName) throws CouponSystemException;

	boolean isCouponAlreadyPurchasedByCustomer(long couponId, long customerId) throws CouponSystemException;

	Collection<Coupon> readCustomerCouponsByType(long customerId, CouponType type) throws CouponSystemException;

	void deleteCustomerCoupons(long customerId) throws CouponSystemException;

	Collection<Coupon> readCustomerCouponsByPrice(long customerId, double price) throws CouponSystemException;

	long getIdByLogin(String customerName, String password) throws CouponSystemException;

}
