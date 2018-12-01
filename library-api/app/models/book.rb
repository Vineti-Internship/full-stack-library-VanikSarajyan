class Book < ApplicationRecord
  belongs_to :author

  validates :title, length: {in: 1..20}
  validates :description, length: {in: 0..100}
  validates :price, :inclusion => {:in => 0..200}
  validates :author_id, presence: true

  def self.search(input_title)
    if input_title
      where(["title LIKE ?", "%#{input_title}%"])
    else
    end
  end
end
