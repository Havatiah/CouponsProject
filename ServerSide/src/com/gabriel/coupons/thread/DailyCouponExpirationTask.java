package com.gabriel.coupons.thread;

import java.util.Collection;
import java.util.Date;

import com.gabriel.coupons.beans.Coupon;
import com.gabriel.coupons.dao.CouponDao;
import com.gabriel.coupons.dao.ICouponDao;
import com.gabriel.coupons.exceptions.CouponSystemException;

public class DailyCouponExpirationTask implements Runnable {
	private ICouponDao couponDao = new CouponDao();
	private static final long TWENTY_FOUR_SEVEN = 24 * 60 * 60 * 1000;

	@Override
	public void run() {
		while (true) {
			try {
				Thread.sleep(TWENTY_FOUR_SEVEN);

			} catch (InterruptedException e1) {
				e1.printStackTrace();
				break;
			}
			Date now = new Date();
			try {
				Collection<Coupon> coupons = couponDao.readAllCoupons();
				for (Coupon coupon : coupons) {
					if (coupon.getEndDate().before(now)) {
						couponDao.deleteCoupon(coupon.getId());
						couponDao.deleteCouponFromJoinTables(coupon.getId());
					}
				}
			} catch (CouponSystemException e) {
				e.printStackTrace();
			}

		}
	}

}
