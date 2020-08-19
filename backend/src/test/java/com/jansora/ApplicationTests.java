package com.jansora;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

@SpringBootTest
class ApplicationTests {


	@Test
	void contextLoads() {
	}

	@Test
	void testDate()
	{
		LocalDate now = LocalDate.now();
		String a = now.toString();
		System.out.println(now.toString());
	}

}
