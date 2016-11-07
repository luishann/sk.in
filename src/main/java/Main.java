import java.sql.*;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Map;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import java.net.URI;
import java.net.URISyntaxException;

import static spark.Spark.*;
import spark.template.freemarker.FreeMarkerEngine;
import spark.ModelAndView;
import spark.Route;

import static spark.Spark.get;

import com.heroku.sdk.jdbc.DatabaseUrl;

import com.skin.me.config.WebConfig;
import com.skin.me.service.impl.SkinService;

@Configuration
@ComponentScan({"com.skin.me"})
public class Main {

  public static void main(String[] args){
  	AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(App.class);
  	new WebConfig(ctx.getBean(SkinService.class));
      ctx.registerShutdownHook();
  }

}
