package com.gabriel.coupons.dao;

import java.util.Collection;

import com.gabriel.coupons.beans.Coupon;
import com.gabriel.coupons.enums.CouponType;
import com.gabriel.coupons.exceptions.CouponSystemException;

public interface ICouponDao {
	long createCoupon(Coupon coupon) throws CouponSystemException;

	Coupon readCoupon(long couponId) throws CouponSystemException;

	Collection<Coupon> readAllCoupons() throws CouponSystemException;

	Collection<Coupon> readCouponByType(CouponType coupon) throws CouponSystemException;

	void updateCoupon(Coupon coupon) throws CouponSystemException;

	void deleteCoupon(long couponId) throws CouponSystemException;

	void deleteCustomerCoupon(long couponId) throws CouponSystemException;

	boolean doesCouponTitleExist(String title) throws CouponSystemException;

	void addCouponIntoCompanyCoupon(long couponId, long companyId) throws CouponSystemException;

	void deleteCouponFromJoinTables(long couponId) throws CouponSystemException;

}
