package com.gabriel.coupons.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import com.gabriel.coupons.beans.Company;
import com.gabriel.coupons.beans.Coupon;
import com.gabriel.coupons.enums.CouponType;
import com.gabriel.coupons.enums.ErrorType;
import com.gabriel.coupons.exceptions.CouponSystemException;
import com.gabriel.coupons.utils.ConnectionPool;

public class CompanyDao implements ICompanyDao {

	@Override
	public void createCompany(Company company) throws CouponSystemException {
		Connection con = null;
		PreparedStatement pstmt = null;
		String sql = "INSERT INTO  company (name, password, email)  VALUES (?,?,?) ";
		try {
			// get a connection from the pool
			con = ConnectionPool.getInstance().getConnection();
			// create a statement
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, company.getName());
			pstmt.setString(2, company.getPassword());
			pstmt.setString(3, company.getEmail());
			// execute the SQL command to create the company in the db
			pstmt.executeUpdate();

		} catch (SQLException e) {
			// create a CouponSystemException and throw it instead of the SQLException
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "createCompany() failed", e);
		} finally {
			// return the connection to the pool
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt);
		}

	}

	@Override
	public Company readCompany(long companyId) throws CouponSystemException {
		String sql = "SELECT * FROM company WHERE id=?";
		Connection con = null;
		// create object "company" to store company data coming from db
		Company company = new Company();
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, companyId);
			rs = pstmt.executeQuery();
			if (!rs.next()) {
				return null;
			}
			// populate object "company"
			company.setId(companyId);
			company.setName(rs.getString("name"));
			company.setPassword(rs.getString("password"));
			company.setEmail(rs.getString("email"));
			return company;

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "readCompany() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);
		}
	}

	@Override
	public Collection<Company> readAllCompanies() throws CouponSystemException {
		String sql = "SELECT * FROM company";
		Connection con = null;
		List<Company> companiesList = new ArrayList<>();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				Company company = new Company();
				company.setId(rs.getLong("id"));
				company.setName(rs.getString("name"));
				company.setPassword(rs.getString("password"));
				company.setEmail(rs.getString("email"));
				companiesList.add(company);
			}
			return companiesList;
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
	public Collection<Coupon> readCoupons(long companyId) throws CouponSystemException {
		List<Long> couponsIds = new ArrayList<>();
		Collection<Coupon> companyCoupons = new ArrayList<>();
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		String sql = "SELECT coupon_id FROM companycoupon WHERE comp_id=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, companyId);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				// populate array "couponsIds" with ids
				couponsIds.add(rs.getLong("coupon_id"));
			}
			// create an object "couponDao" in order to read all data from each coupon
			ICouponDao couponDao = new CouponDao();
			// populate array "companyCoupons" with full data on each coupon
			for (Long couponId : couponsIds) {
				companyCoupons.add(couponDao.readCoupon(couponId));
			}

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "readCoupons() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);

		}
		return companyCoupons;
	}

	@Override
	public Collection<Coupon> readCouponsByType(long companyId, CouponType type) throws CouponSystemException {
		List<Long> couponsIds = new ArrayList<>();
		Collection<Coupon> companyCouponsByType = new ArrayList<>();
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		String sql = "SELECT coupon_id FROM companycoupon WHERE comp_id=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, companyId);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				// populate array "couponsIds" with ids
				couponsIds.add(rs.getLong("coupon_id"));
			}
			// create an object "couponDao" in order to read all data from each coupon
			CouponDao couponDao = new CouponDao();
			// populate array "companyCouponsByType" with full data on each coupon
			for (Long couponId : couponsIds) {
				// Create a Coupon object in order to absorb all the data, in particular its
				// Type
				Coupon coupon = couponDao.readCoupon(couponId);
				// if type of coupon matches type of readCouponsByType box...
				if (coupon.getType().equals(type)) {

					// ... add it in its respective box
					companyCouponsByType.add(couponDao.readCoupon(couponId));
				}
			}

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "readCoupons() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);

		}
		return companyCouponsByType;

	}

	@Override
	public Collection<Coupon> readCouponsByPrice(long companyId, double price) throws CouponSystemException {
		List<Long> couponsIds = new ArrayList<>();
		Collection<Coupon> companyCouponsByPrice = new ArrayList<>();
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		String sql = "SELECT coupon_id FROM companycoupon WHERE comp_id=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, companyId);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				// populate array "couponsIds" with ids
				couponsIds.add(rs.getLong("coupon_id"));
			}
			// create an object "couponDao" in order to read all data from each coupon
			CouponDao couponDao = new CouponDao();
			// populate array "companyCouponsByPrice" with full data on each coupon
			for (Long couponId : couponsIds) {
				// Create a Coupon object in order to absorb all the data, in particular its
				// Price
				Coupon coupon = couponDao.readCoupon(couponId);
				// if price of coupon matches price of readCouponsByPrice box...
				if (coupon.getPrice() <= price) {
					// ... add it in its respective box
					companyCouponsByPrice.add(couponDao.readCoupon(couponId));
				}
			}

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "readCouponsByPrice () falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);

		}
		return companyCouponsByPrice;

	}

	@Override
	public Collection<Coupon> readCouponsByDate(long companyId, Date date) throws CouponSystemException {
		List<Long> couponsIds = new ArrayList<>();
		Collection<Coupon> companyCouponsByDate = new ArrayList<>();
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		String sql = "SELECT coupon_id FROM companycoupon WHERE comp_id=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, companyId);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				// populate array "couponsIds" with ids
				couponsIds.add(rs.getLong("coupon_id"));
			}
			// create an object "couponDao" in order to read all data from each coupon
			CouponDao couponDao = new CouponDao();
			// populate array "companyCouponsByPrice" with full data on each coupon
			for (Long couponId : couponsIds) {
				// Create a Coupon object in order to absorb all the data, in particular its
				// Date
				Coupon coupon = couponDao.readCoupon(couponId);
				// if date of coupon matches date of readCouponsByDate box...
				if (coupon.getEndDate().before(date) || coupon.getEndDate().equals(date)) {
					// ... add it in its respective box
					companyCouponsByDate.add(couponDao.readCoupon(couponId));
				}
			}

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "readCouponsByDate() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);

		}
		return companyCouponsByDate;

	}

	@Override
	public void updateCompany(Company company) throws CouponSystemException {
		Connection con = null;
		PreparedStatement pstmt = null;
		String sql = "UPDATE company SET name=?, password=?, email=? WHERE id=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, company.getName());
			pstmt.setString(2, company.getPassword());
			pstmt.setString(3, company.getEmail());
			pstmt.setLong(4, company.getId());
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
	public void deleteCompany(long companyId) throws CouponSystemException {
		String sql = "DELETE FROM company  WHERE id=? ";
		Connection con = null;
		PreparedStatement pstmt = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, companyId);
			pstmt.executeUpdate();

		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "deleteCompany() failed", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt);
		}

	}

	@Override
	public void deleteCompanyCouponsAndPurchasedCoupons(long companyId) throws CouponSystemException {
		List<Long> couponsIds = new ArrayList<>();
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		String sql = "SELECT coupon_id FROM companycoupon WHERE comp_id=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, companyId);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				// populate array "couponsIds" with ids
				couponsIds.add(rs.getLong("coupon_id"));
			}
			// create an object "couponDao" in order to delete each coupon
			CouponDao couponDao = new CouponDao();

			for (Long couponId : couponsIds) {
				// delete each coupon from coupons table
				couponDao.deleteCoupon(couponId);
				// delete each coupon from customerCoupon join table
				couponDao.deleteCustomerCoupon(couponId);
			}

			// Delete company from companyCoupon join table.
			deleteCompanyFromJoinTable(companyId);

		} catch (SQLException e) {
			e.printStackTrace();
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "deleteCompanyCoupons() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);

		}
	}

	private void deleteCompanyFromJoinTable(long companyId) throws CouponSystemException {
		Connection con = null;
		PreparedStatement pstmt = null;
		String sql = "DELETE FROM companycoupon WHERE comp_id=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setLong(1, companyId);
			pstmt.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "deleteCompanyFromJoinTable() falied", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);
			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt);

		}
	}

	/**
	 * This method is used to check whether a company name already exists in the DB
	 * while validating the creation of a new company
	 * 
	 * @param name
	 *            will contain the name of the new company.
	 * @return <code>true</code> if the name exists in the DB. <code>false</code>
	 *         otherwise
	 */
	@Override
	public boolean doesCompanyNameExist(String companyName) throws CouponSystemException {
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		String sql = "SELECT * FROM company WHERE name=?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, companyName);
			rs = pstmt.executeQuery();
			return rs.next();
		} catch (SQLException e) {
			throw new CouponSystemException(ErrorType.GENERAL_ERROR, "doesCompanyExist() failed", e);
		} finally {
			if (con != null) {
				ConnectionPool.getInstance().returnConnection(con);

			}
			// close remaining resources
			ConnectionPool.getInstance().closeRemainingResources(pstmt, rs);
		}

	}

	/**
	 * * This method is used to find the id of the client after logged in in order
	 * to access Company facade
	 * 
	 * @param companyName,
	 *            password- contain login details
	 * 
	 * @return matching companyId according to login details.
	 */
	@Override
	public long getIdByLogin(String companyName, String password) throws CouponSystemException {
		String sql = "SELECT id FROM company WHERE name=? AND password=?";
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, companyName);
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

	@Override
	public boolean login(String companyName, String password) throws CouponSystemException {
		Connection con = null;
		ResultSet rs = null;
		PreparedStatement pstmt = null;
		String sql = "SELECT * FROM company WHERE name=? AND password =?";
		try {
			con = ConnectionPool.getInstance().getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, companyName);
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
}
