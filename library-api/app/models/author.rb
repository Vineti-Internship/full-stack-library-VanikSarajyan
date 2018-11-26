class Author < ApplicationRecord
    has_many :books

    validates :full_name, length: { in: 2..30 }
    validates :email, uniqueness: {message: "This email has been taken"}, format: { with: URI::MailTo::EMAIL_REGEXP }
end
