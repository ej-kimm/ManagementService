package com.digitaleni.management.controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
class MainController {

    @GetMapping("/hello")
    fun hello():String{
        return "time : ${Date()}";
    }
}
