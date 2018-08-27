package com.gabriel.coupons;

import com.gabriel.coupons.dao.CompanyDao;
import com.gabriel.coupons.dao.CustomerDao;
import com.gabriel.coupons.dao.ICompanyDao;
import com.gabriel.coupons.dao.ICustomerDao;
import com.gabriel.coupons.enums.ClientType;
import com.gabriel.coupons.exceptions.CouponSystemException;
import com.gabriel.coupons.facades.AdminFacade;
import com.gabriel.coupons.facades.CompanyFacade;
import com.gabriel.coupons.facades.CustomerFacade;
import com.gabriel.coupons.facades.IClientFacade;
import com.gabriel.coupons.thread.DailyCouponExpirationTask;
import com.gabriel.coupons.utils.ConnectionPool;

public class CouponSystem {

	private static final CouponSystem instance = new CouponSystem();
	private DailyCouponExpirationTask task;
	private ICompanyDao companyDao;
	private ICustomerDao customerDao;
	private Thread dailyCouponExperationThread;

	private CouponSystem() {
		companyDao = new CompanyDao();
		customerDao = new CustomerDao();

		task = new DailyCouponExpirationTask();
		dailyCouponExperationThread = new Thread(task);
		dailyCouponExperationThread.start();
	}

	public static CouponSystem getInstance() {
		return instance;
	}

	public IClientFacade login(String name, String password, ClientType type) throws CouponSystemException {
		if (type.equals(ClientType.ADMIN)) {
			AdminFacade adminFacade = new AdminFacade();
			if (adminFacade.login(name, password)) {
				return adminFacade;
			}
		}
		if (type.equals(ClientType.COMPANY)) {
			if (companyDao.login(name, password)) {
				long id = companyDao.getIdByLogin(name, password);
				CompanyFacade companyFacade = new CompanyFacade(id);
				return companyFacade;
			}
		}
		if (type.equals(ClientType.CUSTOMER)) {
			if (customerDao.login(name, password)) {
				long id = customerDao.getIdByLogin(name, password);
				CustomerFacade customerFacade = new CustomerFacade(id);
				return customerFacade;
			}
		}
		throw new CouponSystemException("login failed! Please try again");
	}

	public void shutdown() {
		try {
			dailyCouponExperationThread.interrupt();
			dailyCouponExperationThread.join();
		} catch (InterruptedException e1) {
			e1.printStackTrace();
		}
		try {
			ConnectionPool.getInstance().closeAllConnections();
		} catch (CouponSystemException e) {
			e.printStackTrace();
		}
	}

}
