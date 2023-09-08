import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import java.util.Locale

plugins {
    id("org.springframework.boot") version "3.1.3"
    id("io.spring.dependency-management") version "1.1.3"
    kotlin("jvm") version "1.8.22"
    kotlin("plugin.spring") version "1.8.22"
}

group = "com.digitaleni"
version = "0.0.1-SNAPSHOT"

java {
    sourceCompatibility = JavaVersion.VERSION_17
}

configurations {
    compileOnly {
        extendsFrom(configurations.annotationProcessor.get())
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    developmentOnly("org.springframework.boot:spring-boot-devtools")
    annotationProcessor("org.projectlombok:lombok")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs += "-Xjsr305=strict"
        jvmTarget = "17"
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}

// frontend 연동
val frontendDir = "../frontend"

sourceSets {
    main {
        resources {
            srcDirs("$projectDir/src/main/resources")
        }
    }
}

tasks{
    processResources {
        duplicatesStrategy = org.gradle.api.file.DuplicatesStrategy.INCLUDE
    }
}
tasks.processResources {
    dependsOn("copyReactBuildFiles")
}

tasks.register<Exec>("installReact") {
    workingDir = file(frontendDir)
    inputs.dir(frontendDir)
    group = BasePlugin.BUILD_GROUP
    if (System.getProperty("os.name").toLowerCase(Locale.ROOT).contains("windows")) {
        commandLine("yarn.cmd", "audit", "fix")
        commandLine("yarn.cmd", "install")
    } else {
        commandLine("yarn", "audit", "fix")
        commandLine("yarn", "install")
    }
}

tasks.register<Exec>("buildReact") {
    dependsOn("installReact")
    workingDir = file(frontendDir)
    inputs.dir(frontendDir)
    group = BasePlugin.BUILD_GROUP
    if (System.getProperty("os.name").toLowerCase(Locale.ROOT).contains("windows")) {
        commandLine("yarn.cmd", "run", "build")
    } else {
        commandLine("yarn", "run", "build")
    }
}

tasks.register<Copy>("copyReactBuildFiles") {
    dependsOn("buildReact")
    from("$frontendDir/build")
    into("$buildDir/resources/main/static")
}
