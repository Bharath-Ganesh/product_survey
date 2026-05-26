/**
 * Product Survey — Google Sheets backend
 *
 * Spreadsheet:
 * https://docs.google.com/spreadsheets/d/1Z2LFlWj8og9RPy2_OdzSa35IKkUDh61MXjQfk8WQRWE/edit
 *
 * Deploy: Web app → Execute as: Me → Who has access: Anyone
 */

var SPREADSHEET_ID = "1Z2LFlWj8og9RPy2_OdzSa35IKkUDh61MXjQfk8WQRWE";

var HEADERS = [
  "Submitted At",
  "Name",
  "Location Country",
  "Location",
  "Kerala App Interest",
  "Features",
  "Current Handling",
  "Other Feature Ideas"
];

function doPost(e) {
  try {
    var data = parsePayload(e);
    var sheet = getSheet();
    ensureHeaders(sheet);

    var features = Array.isArray(data.features)
      ? data.features.join(", ")
      : (data.features || "");

    var submittedAt = data.submitted_at
      ? new Date(data.submitted_at)
      : new Date();

    sheet.appendRow([
      submittedAt,
      data.name || "",
      data.location_country || "",
      data.location || "",
      data.concierge_interest || "",
      features,
      data.current_handling || "",
      data.other_features || ""
    ]);

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ success: false, error: String(err) });
  }
}

function doGet() {
  return jsonResponse({ success: true, message: "Product Survey API is running." });
}

function parsePayload(e) {
  if (e && e.parameter && e.parameter.payload) {
    return JSON.parse(e.parameter.payload);
  }
  if (e && e.postData && e.postData.contents) {
    return JSON.parse(e.postData.contents);
  }
  throw new Error("No payload received.");
}

function getSheet() {
  return SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0];
}

function ensureHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    return;
  }

  var firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  var hasHeaders = firstRow.some(function (cell) {
    return String(cell).trim() !== "";
  });

  if (!hasHeaders) {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
