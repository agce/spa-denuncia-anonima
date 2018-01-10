class Report < ActiveRecord::Base
    validates :email, presence: true
end