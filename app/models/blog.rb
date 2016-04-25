class Blog < ActiveRecord::Base
  belongs_to :user

  def self.search(search)
    where("user_id LIKE?","%#{search}")
  end

end
