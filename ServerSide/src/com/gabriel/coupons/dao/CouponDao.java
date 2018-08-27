package com.gabriel.coupons.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import com.gabriel.coupons.beans.Coupon;
import com.gabriel.coupons.enums.CouponType;
import com.gabriel.coupons.enums.ErrorType;
import com.gabriel.coupons.exceptions.CouponSystemException;
import com.gabriel.coupons.utils.ConnectionPool;

public class CouponDao implements ICouponDao {
	/**
	 * This method creates a new coupon in the DB
	 * 
	 * @param coupon
	 *            will contain a coupon object
	 * @return long id of the created coupon by using the generated keys.
	 */
	@Override
	public long createCoupon(Coupon coupon) throws CouponSystemException {
		String sql = "INSERT INTO coupon (title, start_date, end_date, amount,"
				+ " type, message, price, image) VALUES (?,?,?,?,?,?,?,?)";
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet generatedKeys = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);
			pstmt.setString(1, coupon.getTitle());
			pstmt.setDate(2, coupon.getStartDate());
			pstmt.setDate(3, coupon.getEndDate());
			pstmt.setInt(4, coupon.getAmount());
			pstmt.setString(5, coupon.getType().name());
			pstmt.setString(6, coupon.getMessage());
			pstmt.setDouble(7, coupon.getPrice());
			pstmt.setString(8, coupon.getImage());
			pstmt.executeUpdate();

			generatedKeys = pstmt.getGeneratedKeys();
			if (generatedKeys.next()) {
				long id = generatedKeys.getLong(1);
				return id;
			} else {
				throw new SQLException();
			}

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "createCoupon failed", e);

		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, generatedKeys);
		}

	}

	@Override
	public void addCouponIntoCompanyCoupon(long companyId, long couponId) throws CouponSystemException {
		String sql = "INSERT INTO companycoupon  VALUES (?,?)";
		Connection con = null;
		PreparedStatement pstmt = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, companyId);
			pstmt.setLong(2, couponId);
			pstmt.executeUpdate();
		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "addCouponIntoCompanyCoupon failed", e);

		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt);
		}

	}

	@Override
	public Coupon readCoupon(long couponId) throws CouponSystemException {
		String sql = "SELECT * FROM coupon WHERE id=?";
		Connection con = null;
		Coupon coupon = new Coupon();
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, couponId);
			rs = pstmt.executeQuery();
			if (!rs.next()) {
				return null;
			}
			coupon.setId(couponId);
			coupon.setTitle(rs.getString("title"));
			coupon.setAmount(rs.getInt("amount"));
			coupon.setStartDate(rs.getDate("start_date"));
			coupon.setEndDate(rs.getDate("end_date"));
			coupon.setImage(rs.getString("image"));
			coupon.setMessage(rs.getString("message"));
			coupon.setPrice(rs.getDouble("price"));
			coupon.setType(CouponType.valueOf(rs.getString("type")));
			return coupon;

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "readCoupon() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);

		}
	}

	@Override
	public Collection<Coupon> readAllCoupons() throws CouponSystemException {

		String sql = "SELECT * FROM coupon";
		Connection con = null;
		List<Coupon> couponsList = new ArrayList<>();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				Coupon coupon = new Coupon();
				coupon.setId(rs.getLong("id"));
				coupon.setTitle(rs.getString("title"));
				coupon.setAmount(rs.getInt("amount"));
				coupon.setStartDate(rs.getDate("start_date"));
				coupon.setEndDate(rs.getDate("end_date"));
				coupon.setImage(rs.getString("image"));
				coupon.setMessage(rs.getString("message"));
				coupon.setPrice(rs.getDouble("price"));
				coupon.setType(CouponType.valueOf(rs.getString("type")));

				couponsList.add(coupon);
			}
			return couponsList;
		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "readAllCompanies() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);
		}

	}

	@Override
	public Collection<Coupon> readCouponByType(CouponType couponType) throws CouponSystemException {
		Collection<Coupon> coupons = new ArrayList<>();
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		String sql = "SELECT * FROM coupon WHERE type=?";
		con = ConnectionPool.getInstance().getConnection();
		try {
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, couponType.toString());

			rs = pstmt.executeQuery();
			while (rs.next()) {
				Coupon coupon = new Coupon();
				coupon.setId(rs.getLong("id"));
				coupon.setTitle(rs.getString("title"));
				coupon.setAmount(rs.getInt("amount"));
				coupon.setStartDate(rs.getDate("start_date"));
				coupon.setEndDate(rs.getDate("end_date"));
				coupon.setImage(rs.getString("image"));
				coupon.setMessage(rs.getString("message"));
				coupon.setPrice(rs.getDouble("price"));
				coupons.add(coupon);
			}
			return coupons;

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "readCouponByType() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);
		}
	}

	@Override
	public void updateCoupon(Coupon coupon) throws CouponSystemException {
		Connection con = null;
		PreparedStatement pstmt = null;
		String sql = "UPDATE coupon SET title=?, start_date=?, end_date=?, amount=?,"
				+ " type=?, message=?, price=?, image=?  WHERE id=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, coupon.getTitle());
			pstmt.setDate(2, coupon.getStartDate());
			pstmt.setDate(3, coupon.getEndDate());
			pstmt.setInt(4, coupon.getAmount());
			pstmt.setString(5, coupon.getType().name());
			pstmt.setString(6, coupon.getMessage());
			pstmt.setDouble(7, coupon.getPrice());
			pstmt.setString(8, coupon.getImage());
			pstmt.setLong(9, coupon.getId());
			pstmt.executeUpdate();
		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "updateCompany failed", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt);
		}

	}

	@Override
	public void deleteCoupon(long couponId) throws CouponSystemException {
		String sql = "DELETE FROM coupon  WHERE id=?";
		PreparedStatement pstmt = null;
		Connection con = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, couponId);
			pstmt.executeUpdate();
		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "deleteCoupon failed", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt);
		}

	}

	public void deleteCustomerCoupon(long couponId) throws CouponSystemException {
		String sql = "DELETE FROM customercoupon  WHERE coupon_id=?";
		PreparedStatement pstmt = null;
		Connection con = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, couponId);
			pstmt.executeUpdate();

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "deleteCustomerCoupon() failed", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt);
		}

	}

	@Override
	public void deleteCouponFromJoinTables(long couponId) throws CouponSystemException {
		Connection con = null;
		PreparedStatement pstmt = null;
		String sql = "DELETE  FROM companycoupon WHERE coupon_id=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, couponId);
			pstmt.executeUpdate();

			// create an object "couponDao" in order to gain access to the method
			// 'deleteCustomerCoupon' which delete the expired coupon from customerCoupon
			// join table
			CouponDao couponDao = new CouponDao();

			couponDao.deleteCustomerCoupon(couponId);
		} catch (SQLException e) {
			e.printStackTrace();
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "deleteCouponsFromJoinTables() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt);

		}
	}

	/**
	 * This method is used to check whether a coupon title already exists in the DB
	 * while validating the creation of a new coupon
	 * 
	 * @param title
	 *            will contain the title of the new coupon.
	 * @return <code>true</code> if the title exists in the DB. <code>false</code>
	 *         otherwise
	 */
	@Override
	public boolean doesCouponTitleExist(String title) throws CouponSystemException {
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		String sql = "SELECT * FROM coupon WHERE title=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, title);
			rs = pstmt.executeQuery();
			return rs.next();
		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "doesCouponTitleExist() failed", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);

			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);
		}
	}

}
