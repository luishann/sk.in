package entryProject;

import java.util.ArrayList;
import java.util.List;
import java.util.Observable;

public class Entry extends Observable implements Comparable{
	/* To implement observable pattern */

	// List of issues
	private List<String> issues = new ArrayList<String>();

	// List of products
	private List<Product> products = new ArrayList<Product>();

	// path to the photo
	private String photoPath;

	// Description of the entry
	private String description;

	// Date of the entry
	private String date;

	// Rating of the entry
	private int rating;

	/**
	 * The constructor takes a path to a photo and the date that the entry was
	 * created
	 * 
	 * @param photoPath
	 *            path to the photo
	 * @param date
	 *            the date that the entry was created
	 */
	public Entry(String photoPath, String date) {

		this.photoPath = photoPath;
		this.date = date;
	}

	/*
	 * Update the list of products for the entry
	 */
	public void addProduct(Product product) {
		// Add this product to the user entry
		if (!products.contains(product)) {
			products.add(product);
		}
	}

	/**
	 * Gets an issue and adds it to the list of the issues if the issue was not
	 * already inside the list
	 * 
	 * @param issue
	 */
	public void addIssue(String issue) {
		if (!issues.contains(issue)) {
			issues.add(issue);
		}
	}

	/**
	 * Adds a description for the entry
	 * 
	 * @param description
	 *            takes an String as the description
	 */
	public void addDescription(String description) {

		this.description = description;
	}

	/**
	 * Updates the path to the photo
	 * 
	 * @param newPath
	 *            the new path of the photo
	 */
	public void updatePhoto(String newPath) {

		this.photoPath = newPath;
	}

	/*
	 * Add rating for the entry
	 */
	public void addRating(int rating) {
		// Setting a new rating
		this.rating = rating;
	}

	/**
	 * Gets the list of the issues that is tagged to this entry
	 * 
	 * @return list of all issues
	 */
	public List<String> getIssues() {
		return issues;
	}

	/**
	 * Gets the list of all products that are tagged to this entry
	 * 
	 * @return list of all products
	 */
	public List<Product> getProducts() {
		return products;
	}

	/**
	 * Gets the description of this entry
	 * 
	 * @return description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * Gets the date that the entry was created
	 * 
	 * @return date
	 */
	public String getDate() {
		return date;
	}

	/**
	 * Gets the rating of this entry
	 * 
	 * @return rating
	 */
	public int getRating() {
		return rating;
	}

	@Override
	public int compareTo(Object obj) {
		// TODO Auto-generated method stub
		if(!(obj instanceof Entry)){
			throw new IllegalArgumentException();
		}
		
		return Integer.compare(this.getRating(), ((Entry)obj).getRating());
	}

}
