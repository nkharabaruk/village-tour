package ua.edu.lp.villagetour.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.PathResourceResolver;

import java.io.IOException;

@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("forward:/index.html");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        PathResourceResolver resolver = new PathResourceResolver() {
            @Override
            protected Resource getResource(String resourcePath, Resource location) throws IOException {
                return location.exists() && location.isReadable() ? location : null;
            }
        };
        registry.addResourceHandler("/*.*")
                .addResourceLocations("classpath:/webapp/");
        registry.addResourceHandler("/*", "/**")
                .addResourceLocations("classpath:/webapp/index.html")
                .resourceChain(true).addResolver(resolver);
    }
}
