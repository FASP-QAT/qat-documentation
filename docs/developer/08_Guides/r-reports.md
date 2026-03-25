---
id: r-reports
title: R Reports
sidebar_label: R Reports
sidebar_position: 2
---

# Running R based reports

Please follow the below steps to install R application required for running ARIMA based reports.

```bash
$ sudo apt update
$ sudo apt install libsodium-dev
$ sudo apt-get install libcurl4-openssl-dev
$ sudo apt install r-base
```

After installing R application type R in command prompt to launch the console of R application as given below.

```bash
$ R
```

Once you enter the console of R application you need to install Plumber and forecast packages. Given below are the steps.

```bash
install.packages("plumber")
install.packages("forecast")
```

You can run the R application with below command.

```bash
plumber::plumb(file='/root/Documents/GitRepo/Rprojects/api_arima.r')$run(host="0.0.0.0", port=8000)
```

After running R application go to Postman application and enter below line in post column and enter the details.

[http://server-ipaddress:8000/tes](http://server-ipaddress:8000/tes)

