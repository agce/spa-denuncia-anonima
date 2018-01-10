class User < ActiveRecord::Base
    before_save { self.email = email.downcase }
    validates :username, presence: true
    VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }
end