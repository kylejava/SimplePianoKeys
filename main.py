import webapp2
import jinja2
import os
import logging


env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)


class MainPage(webapp2.RequestHandler):
    def get(self):
        logging.info('in get self')
        mypage = env.get_template('templates/home.html')
        self.response.write(mypage.render())

class Ode(webapp2.RequestHandler):
    def get(self):
        logging.info('in get self')
        mypage = env.get_template('templates/ode.html')
        self.response.write(mypage.render())

class Twinkle(webapp2.RequestHandler):
    def get(self):
        logging.info('in get self')
        mypage = env.get_template('templates/twinkle.html')
        self.response.write(mypage.render())

class Joy(webapp2.RequestHandler):
    def get(self):
        logging.info('in get self')
        mypage = env.get_template('templates/joy.html')
        self.response.write(mypage.render())

class Spider(webapp2.RequestHandler):
    def get(self):
        logging.info('in get self')
        mypage = env.get_template('templates/spider.html')
        self.response.write(mypage.render())

class Jingle(webapp2.RequestHandler):
    def get(self):
        logging.info('in get self')
        mypage = env.get_template('templates/jingle.html')
        self.response.write(mypage.render())

class Mary(webapp2.RequestHandler):
    def get(self):
        logging.info('in get self')
        mypage = env.get_template('templates/mary.html')
        self.response.write(mypage.render())

class Teapot(webapp2.RequestHandler):
    def get(self):
        logging.info('in get self')
        mypage = env.get_template('templates/teapot.html')
        self.response.write(mypage.render())

class London(webapp2.RequestHandler):
    def get(self):
        logging.info('in get self')
        mypage = env.get_template('templates/london.html')
        self.response.write(mypage.render())

class About(webapp2.RequestHandler):
    def get(self):
        logging.info('in get self')
        mypage = env.get_template('templates/about.html')
        self.response.write(mypage.render())

app = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/ode', Ode ),
    ('/twinkle', Twinkle),
    ('/joy', Joy),
    ('/spider', Spider),
    ('/jingle', Jingle),
    ('/mary', Mary),
    ('/teapot', Teapot),
    ('/london', London),
    ('/about', About)
], debug=True)
