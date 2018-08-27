package com.gabriel.coupons.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import com.gabriel.coupons.beans.Coupon;
import com.gabriel.coupons.beans.Customer;
import com.gabriel.coupons.enums.CouponType;
import com.gabriel.coupons.enums.ErrorType;
import com.gabriel.coupons.exceptions.CouponSystemException;
import com.gabriel.coupons.utils.ConnectionPool;

public class CustomerDao implements ICustomerDao {
	public CustomerDao() {
	}

	@Override
	public void createCustomer(Customer customer) throws CouponSystemException {
		PreparedStatement pstmt = null;
		Connection con = null;
		String sql = "INSERT INTO customer (name, password) VALUES (?,?)";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, customer.getName());
			pstmt.setString(2, customer.getPassword());
			pstmt.executeUpdate();

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "createCustomer failed", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt);
		}

	}

	@Override
	public Customer readCustomer(long customerId) throws CouponSystemException {
		String sql = "SELECT * FROM customer WHERE id=?";
		Connection con = null;
		Customer customer = new Customer();
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, customerId);
			rs = pstmt.executeQuery();
			if (!rs.next()) {
				return null;
			}
			customer.setId(customerId);
			// retrieve the data by adding the column names:
			customer.setName(rs.getString("name"));
			customer.setPassword(rs.getString("password"));
			return customer;

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "readCustomer() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);
		}

	}

	@Override
	public Collection<Coupon> readCustomerCoupons(long customerId) throws CouponSystemException {
		List<Long> couponsIds = new ArrayList<>();
		Collection<Coupon> customerCoupons = new ArrayList<>();
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "SELECT coupon_id FROM customercoupon WHERE cust_id=? ";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, customerId);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				// populate array "couponsIds" with Ids
				couponsIds.add(rs.getLong("coupon_id"));
			}
			/// create an object "couponDao" in order to read all data from each coupon
			ICouponDao couponDao = new CouponDao();
			// populate array "companyCoupons" with full data on each coupon
			for (long couponId : couponsIds) {
				customerCoupons.add(couponDao.readCoupon(couponId));
			}

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "readCustomerCoupons() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);

		}
		return customerCoupons;
	}

	@Override
	public Collection<Customer> readAllCustomers() throws CouponSystemException {
		String sql = "SELECT * FROM customer";
		Connection con = null;
		List<Customer> customersList = new ArrayList<>();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				Customer customer = new Customer();
				customer.setId(rs.getLong("id"));
				customer.setName(rs.getString("name"));
				customer.setPassword(rs.getString("password"));
				customersList.add(customer);
			}
			return customersList;
		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "readAllCustomers() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);
		}

	}

	@Override
	public Collection<Coupon> readCustomerCouponsByType(long customerId, CouponType type) throws CouponSystemException {
		List<Long> couponsIds = new ArrayList<>();
		Collection<Coupon> customerCouponsByType = new ArrayList<>();
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		String sql = "SELECT coupon_id FROM customercoupon WHERE cust_id=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, customerId);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				// populate array "couponsIds" with ids
				couponsIds.add(rs.getLong("coupon_id"));
			}
			// create an object "couponDao" in order to read all data from each coupon
			CouponDao couponDao = new CouponDao();
			// populate array "customerCouponsByType" with full data on each coupon
			for (Long couponId : couponsIds) {
				// Create a Coupon object in order to absorb all the data, in particular its
				// Type
				Coupon coupon = couponDao.readCoupon(couponId);
				// if type of coupon matches type of readCouponsByType box...
				if (coupon.getType().equals(type)) {

					// ... add it in its respective box
					customerCouponsByType.add(coupon);
				}
			}

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "customerCouponsByType() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);

		}
		return customerCouponsByType;

	}

	@Override
	public Collection<Coupon> readCustomerCouponsByPrice(long customerId, double price) throws CouponSystemException {
		List<Long> couponsIds = new ArrayList<>();
		Collection<Coupon> customerCouponsByPrice = new ArrayList<>();
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		String sql = "SELECT coupon_id FROM customercoupon WHERE cust_id=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, customerId);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				// populate array "couponsIds" with ids
				couponsIds.add(rs.getLong("coupon_id"));
			}
			// create an object "couponDao" in order to read all data from each coupon
			CouponDao couponDao = new CouponDao();
			// populate array "customerCouponsByPrice" with full data on each coupon
			for (Long couponId : couponsIds) {
				// Create a Coupon object in order to absorb all the data, in particular its
				// Price
				Coupon coupon = couponDao.readCoupon(couponId);
				// if price of existing coupon matches price of readCouponsByPrice box...
				if (coupon.getPrice() <= price) {
					// ... add it in its respective box
					customerCouponsByPrice.add(coupon);
				}
			}

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "readCustomerCouponsByPrice() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);

		}
		return customerCouponsByPrice;

	}

	@Override
	public void updateCustomer(Customer customer) throws CouponSystemException {
		Connection con = null;
		PreparedStatement pstmt = null;
		String sql = "UPDATE customer SET name=?, password=? WHERE id=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, customer.getName());
			pstmt.setString(2, customer.getPassword());
			pstmt.setLong(3, customer.getId());
			pstmt.executeUpdate();
		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "updateCustomer failed", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt);
		}

	}

	@Override
	public void deleteCustomer(long customerId) throws CouponSystemException {
		String sql = "DELETE FROM customer WHERE id=? ";
		PreparedStatement pstmt = null;
		Connection con = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, customerId);
			pstmt.executeUpdate();
		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "deleteCustomer failed", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt);
		}

	}

	@Override
	public void deleteCustomerCoupons(long customerId) throws CouponSystemException {
		String sql = "DELETE FROM customercoupon WHERE cust_id=? ";
		PreparedStatement pstmt = null;
		Connection con = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, customerId);
			pstmt.executeUpdate();
		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "deleteCustomerCoupons failed", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt);
		}
	}

	@Override
	public boolean login(String customerName, String password) throws CouponSystemException {
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		String sql = "SELECT * FROM customer WHERE name=? AND password=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, customerName);
			pstmt.setString(2, password);
			rs = pstmt.executeQuery();
			return rs.next();
		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "login() failed", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);

			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);
		}
	}

	@Override
	public long getIdByLogin(String customerName, String password) throws CouponSystemException {
		String sql = "SELECT id FROM customer WHERE name=? AND password=?";
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, customerName);
			pstmt.setString(2, password);
			rs = pstmt.executeQuery();
			if (!rs.next()) {
				return -1;
			}
			return rs.getLong("id");

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "getIdByLogin() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);

		}

	}

	/**
	 * This method is used to check whether a customer name already exists in the DB
	 * while validating the creation of a new customer
	 * 
	 * @param customerName
	 *            will contain the name of the new customer.
	 * @return <code>true</code> if the name exists in the DB. <code>false</code>
	 *         otherwise
	 */
	@Override
	public boolean doesCustomerNameExist(String customerName) throws CouponSystemException {
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		String sql = "SELECT * FROM customer WHERE name=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, customerName);
			rs = pstmt.executeQuery();
			return rs.next();
		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "doesCustomerNameExist() failed", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);

			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);
		}

	}

	@Override
	public boolean isCouponAlreadyPurchasedByCustomer(long customerId, long couponId) throws CouponSystemException {
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		String sql = "SELECT * FROM customercoupon WHERE cust_id=? AND coupon_id=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, customerId);
			pstmt.setLong(2, couponId);
			rs = pstmt.executeQuery();
			return rs.next();
		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "isCouponAlreadyPurchasedByCustomer() failed", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);

			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);
		}

	}

	@Override
	public void purchaseCoupon(long customerId, long couponId) throws CouponSystemException {
		String sql = "INSERT INTO customercoupon VALUES (?,?)";
		PreparedStatement pstmt = null;
		Connection con = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, customerId);
			pstmt.setLong(2, couponId);
			pstmt.executeUpdate();
			// decrease the amount of the purchased coupon
			decreaseAmountAfterPurchase(couponId);

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "purchaseCoupon failed", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt);
		}

	}

	private void decreaseAmountAfterPurchase(long couponId) throws CouponSystemException {
		Connection con = null;
		PreparedStatement pstmt = null;
		String sql = "UPDATE coupon SET  amount= amount-1  WHERE id=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, couponId);
			pstmt.executeUpdate();
		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "decreaseAmountAfterPurchase failed", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt);
		}

	}

}
