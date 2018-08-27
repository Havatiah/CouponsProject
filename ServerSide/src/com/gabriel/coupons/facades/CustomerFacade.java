package com.gabriel.coupons.facades;

import java.util.Collection;
import java.util.Date;

import com.gabriel.coupons.beans.Coupon;
import com.gabriel.coupons.dao.CouponDao;
import com.gabriel.coupons.dao.CustomerDao;
import com.gabriel.coupons.dao.ICouponDao;
import com.gabriel.coupons.dao.ICustomerDao;
import com.gabriel.coupons.enums.CouponType;
import com.gabriel.coupons.enums.ErrorType;
import com.gabriel.coupons.exceptions.CouponSystemException;

public class CustomerFacade implements IClientFacade {
	// Field
	private ICouponDao couponDao = new CouponDao();
	private ICustomerDao customerDao = new CustomerDao();
	private long customerId;

	// Cstor
	public CustomerFacade(long customerId) {
		this.customerId = customerId;
	}

	public boolean login(String customerName, String password) throws CouponSystemException {
		return customerDao.login(customerName, password);
	}

	public void purchaseCoupon(long couponId) throws CouponSystemException {
		// Define variable which contains the coupon in the DB
		Coupon couponInDb = couponDao.readCoupon(couponId);
		if (customerDao.isCouponAlreadyPurchasedByCustomer(customerId, couponId)) {

			throw new CouponSystemException(ErrorType.COUPON_ALREADY_PURCHASED, "You already purchased that coupon");
		}
		if (couponInDb.getAmount() < 1) {
			throw new CouponSystemException(ErrorType.OUT_OF_STOCK, "No coupons in stock. Please chose another coupon");
		}
		Date now = new Date();
		if (couponInDb.getEndDate().before(now)) {
			throw new CouponSystemException(ErrorType.NOT_AVAILABLE,
					"Coupon already expired. Please chose another one");
		}
		customerDao.purchaseCoupon(customerId, couponId);

	}

	public Collection<Coupon> readCustomerCoupons() throws CouponSystemException {
		if (customerDao.readCustomerCoupons(customerId).isEmpty()) {
			throw new CouponSystemException(ErrorType.NOT_AVAILABLE, "There are no coupons under this customer");
		}
		return customerDao.readCustomerCoupons(customerId);
	}

	public Collection<Coupon> readCustomerCouponsByType(CouponType type) throws CouponSystemException {
		if (customerDao.readCustomerCouponsByType(customerId, type).isEmpty()) {
			throw new CouponSystemException(ErrorType.NOT_AVAILABLE, "There are no coupons under category " + type);
		}
		return customerDao.readCustomerCouponsByType(customerId, type);
	}

	public Collection<Coupon> readCustomerCouponsByPrice(double price) throws CouponSystemException {
		Collection<Coupon> customerCouponsByPrice = customerDao.readCustomerCouponsByPrice(customerId, price);
		if (customerCouponsByPrice.isEmpty()) {
			throw new CouponSystemException(ErrorType.OUT_OF_STOCK, "There are no coupons under " + price);
		}
		return customerCouponsByPrice;
	}
}
