package com.gabriel.coupons.facades;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;

import com.gabriel.coupons.beans.Company;
import com.gabriel.coupons.beans.Coupon;
import com.gabriel.coupons.dao.CompanyDao;
import com.gabriel.coupons.dao.CouponDao;
import com.gabriel.coupons.dao.ICompanyDao;
import com.gabriel.coupons.dao.ICouponDao;
import com.gabriel.coupons.enums.CouponType;
import com.gabriel.coupons.enums.ErrorType;
import com.gabriel.coupons.exceptions.CouponSystemException;

public class CompanyFacade implements IClientFacade {
	// Assigning a local variable of "companyDao" in order to gain access to the
	// methods communicating with the DB.
	private ICompanyDao companyDao = new CompanyDao();
	private ICouponDao couponDao = new CouponDao();
	private long companyId;

	// Create a Ctor which instantiates the above variables
	public CompanyFacade(long companyId) {
		this.companyId = companyId;
	}

	public CompanyFacade() {
	}

	public boolean login(String companyName, String password) throws CouponSystemException {
		return companyDao.login(companyName, password);
	}

	public void createCoupon(Coupon coupon) throws CouponSystemException {
		if (couponDao.doesCouponTitleExist(coupon.getTitle())) {
			throw new CouponSystemException(ErrorType.NAME_ALREADY_EXISTS, "Title already exists, try a new name");
		}

		// "coupon" attribute does not contain the id since it is auto incremented.
		// hence, we need to retrieve it from the database after it was created.
		// CreateCoupon returns the Id by using generateKeys.
		long couponId = couponDao.createCoupon(coupon);
		couponDao.addCouponIntoCompanyCoupon(companyId, couponId);
	}

	public Company readCompany() throws CouponSystemException {
		return companyDao.readCompany(companyId);
	}

	public Collection<Coupon> readCoupons() throws CouponSystemException {
		if (companyDao.readCoupons(companyId).isEmpty()) {
			throw new CouponSystemException(ErrorType.NOT_AVAILABLE, "there are no coupons");
		}
		return companyDao.readCoupons(companyId);
	}

	public Collection<Coupon> readCouponsByType(CouponType type) throws CouponSystemException {
		if (companyDao.readCouponsByType(companyId, type).isEmpty()) {
			throw new CouponSystemException(ErrorType.NOT_AVAILABLE, "there are no coupons under category: " + type);
		}
		return companyDao.readCouponsByType(companyId, type);

	}

	public Collection<Coupon> readCouponsByPrice(double price) throws CouponSystemException {
		if (companyDao.readCouponsByPrice(companyId, price).isEmpty()) {
			throw new CouponSystemException(ErrorType.NOT_AVAILABLE, "there are no coupons under " + price);
		}
		return companyDao.readCouponsByPrice(companyId, price);
	}

	public Collection<Coupon> readCouponsByDate(String date) throws CouponSystemException {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date limitedDate = null;
		try {
			limitedDate = simpleDateFormat.parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		if (companyDao.readCouponsByDate(companyId, limitedDate).isEmpty()) {
			throw new CouponSystemException(ErrorType.NOT_AVAILABLE, "there are no coupons under that date");
		}
		return companyDao.readCouponsByDate(companyId, limitedDate);
	}

	public void updateCoupon(Coupon coupon) throws CouponSystemException {
		// Define variable which contains the coupon in the DB
		Coupon couponInDb = couponDao.readCoupon(coupon.getId());
		if (!coupon.getTitle().equals(couponInDb.getTitle())) {
			throw new CouponSystemException(ErrorType.NAME_IS_IRREPLACEABLE, "You cannot change a coupon's name");
		}
		if (coupon.getStartDate().compareTo(coupon.getStartDate()) != 0) {
			throw new CouponSystemException(ErrorType.FIELD_IS_IRREPLACEABLE, "You cannot change a coupon's StartDate");
		}
		if (coupon.getAmount() != couponInDb.getAmount()) {
			throw new CouponSystemException(ErrorType.FIELD_IS_IRREPLACEABLE, "You cannot change a coupon's Amount");
		}
		if (!coupon.getType().equals(couponInDb.getType())) {
			throw new CouponSystemException(ErrorType.FIELD_IS_IRREPLACEABLE, "You cannot change a coupon's Type");
		}
		if (!coupon.getMessage().equals(couponInDb.getMessage())) {
			throw new CouponSystemException(ErrorType.FIELD_IS_IRREPLACEABLE, "You cannot change a coupon's Message");
		}
		if (!coupon.getImage().equals(couponInDb.getImage())) {
			throw new CouponSystemException(ErrorType.FIELD_IS_IRREPLACEABLE, "You cannot change a coupon's Image");
		}
		couponDao.updateCoupon(coupon);

	}

	public void deleteCoupon(long couponId) throws CouponSystemException {
		couponDao.deleteCoupon(couponId);
		couponDao.deleteCouponFromJoinTables(couponId);
	}
}
