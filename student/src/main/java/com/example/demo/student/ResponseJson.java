/**
 * 
 */
package com.example.demo.student;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * @author sowmya 17-Jul-2018
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class ResponseJson {
	
	private String status;
	
	private int statusCode;
	
	private String statusMessage;
	
	private String showMessage;
	
	private Object result;
	
	// Setters and Getters
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

	public String getStatusMessage() {
		return statusMessage;
	}

	public void setStatusMessage(String statusMessage) {
		this.statusMessage = statusMessage;
	}

	public String getShowMessage() {
		return showMessage;
	}

	public void setShowMessage(String showMessage) {
		this.showMessage = showMessage;
	}

	public Object getResult() {
		return result;
	}

	public void setResult(Object result) {
		this.result = result;
	}

	//toString()
	@Override
	public String toString() {
		return "ResponseJson [status=" + status + ", statusCode=" + statusCode + ", statusMessage=" + statusMessage
				+ ", showMessage=" + showMessage + ", result=" + result + "]";
	}
	
}// Class
