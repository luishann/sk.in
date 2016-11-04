package entryProject;

import java.util.ArrayList;
import java.util.List;

public class Entry extends Observable {
	
	//List of issues
	 private List<String> issues = new ArrayList<String>();
	
	//List of products
	 private List<Product> products = new ArrayList<Product>();
	
	//path to the photo
	 private String photoPath;
	
	//Description of the entry
	 private String description;
	
	 //Rating of the entry
	 private int rating;
	
	 /*
	  * Update the list of products for the entry
	  */
	 public  void addProduct(Product product){
		 //Add this product to the user entry
		 products.add(product);
	 }
	 
	 /*
	  * Add rating for the entry
	  */
	 public void addRating(int rating){
		 this.rating = rating;
	 }
	 

}

