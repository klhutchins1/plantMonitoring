<<<<<<< HEAD
plantMonitoring
=======
Manage your plants and gardens

#Requirements
meteor

#Description
Doesn't do much at the moment. Just getting settings save to DB and geting used to Meteor

Will eventually be working on RasPi, to monitor custom gardens and plants.


Will monitor Plants and gardens.

Could automate watering and light depending on time, or other variables ??????

Gardens - Can have 1 or 100. This is to group the plants. All plants will be a member of a Garden. Each garden can be monitored,
or controlled. Will be created for a certain size, add plants a certain locations.

Plants - Can have 1 or 100 per Garden. Can have optimal settings for the plant type.
Ex. tomatoes need * of water per day, * amount of light ever * hours, should be kept at * temp.


Monitoring - Will have the following at install: Air Temperature,  Soil Temperature, Soil Moisture, 
Light Lumen, Humidity, Wind. Will be able to add any other. This can be with the raspi GPIOs. 
This can be at the plant or garden level.
Raw data or graphs could be available.

Automation - Will be an option on the plant or garden level. Light, Water, heat. More could be available?


Installation on Raspberry Pi
-----------

From http://meteor-universal.tumblr.com/

Install Meteor-
sudo su
apt-get update
apt-get dist-upgrade
dpkg -p git-core >/dev/null 2>&1 || apt-get install git-core
echo "deb http://mirrordirector.raspbian.org/raspbian/ jessie main contrib non-free rpi" > /etc/apt/sources.list.d/jessie-packages.list
apt-get update
sudo apt-get install build-essential debian-keyring autoconf automake libtool flex bison mongodb
apt-get autoremove --purge
apt-get clean
rm /etc/apt/sources.list.d/jessie-packages.list
apt-get update
cd /tmp
curl -L -O https://github.com/4commerce-technologies-AG/meteor/releases/download/release%2F1.1.0.2-universal/node-v0.10.38-RASPBIAN-WHEEZY.tar.gz
cd /
tar -xvzf /tmp/node-v0.10.38-RASPBIAN-WHEEZY.tar.gz
cd /usr/local/lib
git clone https://github.com/4commerce-technologies-AG/meteor.git
cd meteor
ln -s /usr/local/lib/meteor/meteor /usr/local/bin/meteor
curl -L -O https://github.com/4commerce-technologies-AG/meteor/releases/download/release%2F1.1.0.2-universal/dev_bundle_Linux_armv6l_universal_1.1.0.2_RASPBIAN-WHEEZY_0.4.18.tar.gz

# Install plant monitor
sudo mkdir /home/pi/plantMonitoring
git clone https://github.com/klhutchins1/plantMonitoring.git
cd plantMonitoring/client/
git clone https://github.com/DerMambo/stylesheets.git
=======

