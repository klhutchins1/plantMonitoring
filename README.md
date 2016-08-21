plantMonitoring
=======
Manage and Monitor your plants and gardens

#Requirements
Raspberry Pi 2 or 3
meteor
1wire devices

#Description of Current features
Creates and organizes plants and gardens, works on Raspberry Pi.
Add Plant to a Garden.
1wire tempurature logs every 15 minutes, and displays the most recent.
LED will turn on and off with button push

#Future Plans
Find and add 1-wire address to devices list through interface.
Add wire number to devices.
Change cron job time through interface.
Support more devices.


Monitoring - Will have the following at install: Air Temperature,  Soil Temperature, Soil Moisture,
Light Lumen, Humidity, Wind. Will be able to add any other. This can be with the raspi GPIOs.
This can be at the plant or garden level.
Raw data or graphs could be available.

Automation - Will be an option on the plant or garden level. Light, Water, heat. More could be available?



###################################
#
#   Installation on Raspberry Pi
#
###################################
# OS Image - 2016-05-10 Raspian Jessie lite

#expand file system
#change User Password
#Hostname meteorPi2B-01 meteorPiB-01 meteorPi3-01
#enable 1-wire
#Update tool
sudo raspi-config  
	

#update WPA supplicant
sudo nano /etc/wpa_supplicant/wpa_supplicant.conf

ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
    ssid="XXXXXXXX"
    psk="xxxxxxxxx"
    proto=RSN
    key_mgmt=WPA-PSK
    pairwise=CCMP
    auth_alg=OPEN
}

	
#reboot
sudo reboot


#From http://meteor-universal.tumblr.com/
#get dependancies for raspi to 	build Meteor http://meteor-universal.tumblr.com/post/132266856859/1st-time-installation-meteor-12x-universal-raspbian
sudo su -
apt-get update && sudo apt-get upgrade -y
dpkg -p git-core >/dev/null 2>&1 || apt-get install git-core -y
apt-get install -y rpi-update git curl ca-certificates build-essential debian-keyring autoconf automake libtool flex bison scons i2c-tools locales screen -y
rpi-update
apt-get dist-upgrade
apt-get autoremove --purge
apt-get clean

#reboot
sudo reboot

#fix certificate issue https://github.com/4commerce-technologies-AG/meteor/issues/37  could be removed after 1.3 update?
sudo curl --cacert /etc/ssl/certs/ca-certificates.crt https://dl.bintray.com
cd /tmp
curl -L -O "https://archive.raspbian.org/raspbian/pool/main/c/ca-certificates/ca-certificates_20130119+deb7u1_all.deb"
sudo dpkg -P --force-all ca-certificates
sudo dpkg -i /tmp/ca-certificates_20130119+deb7u1_all.deb

#Fix locals for Mongo https://github.com/meteor/meteor/issues/4019
sudo locale-gen en_US.UTF-8
sudo localedef -i en_US -f UTF-8 en_US.UTF-8

#git and setup the initial pi fork of meteor
cd $HOME
git clone --depth 1 https://github.com/4commerce-technologies-AG/meteor.git

cd $HOME
git clone --depth 1 https://github.com/klhutchins1/plantMonitoring.git
cd plantMonitoring
sudo $HOME/meteor/meteor

#reboot
sudo reboot




########################################################
#  NOTES - past here not needed but was once used
########################################################

Building onoff on windows needs:
You need python 2.7; http://www.python.org/download/releases/2.7.3#download
You need the c++ 2010; http://go.microsoft.com/?linkid=9709949
If you have 64bits: http://www.microsoft.com/en-us/download/details.aspx?id=8279
The compilers: http://www.microsoft.com/en-us/download/details.aspx?id=4422
Visual Studio: http://go.microsoft.com/?linkid=9816758

Run:
call "C:\Program Files\Microsoft SDKs\Windows\v7.1\bin\Setenv.cmd" /Release /x86
Then Run Meteor, This will build onOff and run meteor successfully, OnOff won't work on windows, but will allow you to dev on Windows box.
You can now run meteor regularly.


#Change hostname
#sudo nano /etc/hosts
#sudo nano /etc/hostname
#sudo /etc/init.d/hostname.sh

#wireless 
sudo nano /etc/network/interfaces

# interfaces(5) file used by ifup(8) and ifdown(8)
# Please note that this file is written to be used with dhcpcd
# For static IP, consult /etc/dhcpcd.conf and 'man dhcpcd.conf'

# Include files from /etc/network/interfaces.d:
auto wlan0
source-directory /etc/network/interfaces.d

auto lo
iface lo inet loopback

iface eth0 inet manual

allow-hotplug wlan0
iface wlan0 inet dhcp
wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
iface default inet dhcp

#Add 1 wire support for ds18b20 temperature sensor from https://learn.adafruit.com/downloads/pdf/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing.pdf
sudo nano /boot/config.txt
#add to bottom
dtoverlay=w1-gpio,gpiopin=4


# from https://github.com/chamerling/ds18b20
sudo modprobe wire
sudo modprobe w1-gpio
sudo modprobe w1-therm

#sudo nano /etc/modules

#+add+ 
#i2c-bcm2708 
#i2c-dev

#sudo nano /etc/modprobe.d/raspi-blacklist.conf

#blacklist i2c-bcm2708

#sudo modprobe i2c-bcm2708
#sudo modprobe i2c-dev