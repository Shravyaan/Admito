const API_URL = "http://localhost:4500";

// --- AUTH FUNCTIONS ---

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Login failed");
    return data;
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};

export const registerUser = async (name, email, password, role = "user") => {
  try {
    const response = await fetch(`${API_URL}/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Registration failed");
    return data;
  } catch (error) {
    console.error("Registration error:", error.message);
    throw error;
  }
};

// --- VISITOR MANAGEMENT FUNCTIONS ---

export const getAllVisitors = async (token) => {
  try {
    const response = await fetch(`${API_URL}/visitor`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to fetch visitors");
    return data;
  } catch (error) {
    console.error("Fetch visitors error:", error.message);
    throw error;
  }
};

export const createVisitor = async (visitorData, token) => {
  try {
    const response = await fetch(`${API_URL}/visitor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(visitorData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to create visitor");
    return data;
  } catch (error) {
    console.error("Create visitor error:", error.message);
    throw error;
  }
};

export const getVisitorById = async (id, token) => {
  try {
    const response = await fetch(`${API_URL}/visitor/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to fetch visitor");
    return data;
  } catch (error) {
    console.error("Fetch visitor error:", error.message);
    throw error;
  }
};

export const updateVisitor = async (id, visitorData, token) => {
  try {
    const response = await fetch(`${API_URL}/visitor/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(visitorData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to update visitor");
    return data;
  } catch (error) {
    console.error("Update visitor error:", error.message);
    throw error;
  }
};

export const deleteVisitor = async (id, token) => {
  try {
    const response = await fetch(`${API_URL}/visitor/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to delete visitor");
    return data;
  } catch (error) {
    console.error("Delete visitor error:", error.message);
    throw error;
  }
};

// --- ANNOUNCEMENT FUNCTIONS ---

export const createAnnouncement = async (announcementData, token) => {
  try {
    const response = await fetch(`${API_URL}/admin/announcements`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(announcementData),
    });
    const data = await response.json();
    if (!response.ok)
      throw new Error(data.error || "Failed to post announcement");
    return data;
  } catch (error) {
    console.error("Announcement error:", error.message);
    throw error;
  }
};

export const getAnnouncements = async () => {
  try {
    const response = await fetch(`${API_URL}/admin/announcements`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (!response.ok)
      throw new Error(data.error || "Failed to fetch announcements");
    return data;
  } catch (error) {
    console.error("Fetch announcements error:", error.message);
    throw error;
  }
};
